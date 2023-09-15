


const socketController = (socket) => {
    console.log('Cliente Conectado', socket.id)

    socket.on('disconnect', () => {
        // console.log('Cliente Desconectado', socket.id)
    })


    socket.on('enviar-mensaje', (payload, callback) => {
        // console.log(payload)

        const id = 123456789;
        callback({ok: true, id, fecha: new Date().getTime()})
        socket.broadcast.emit('enviar-mensaje', payload)
    })

    //? Funcion para desconectar los Sockets
    // socket.disconnect()
}


module.exports = {
    socketController
}