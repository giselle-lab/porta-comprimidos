const compartimentos = {
    login: '',
    senha: '',
    compartimentos: {
      c1: [
        {
          nome: 'Dipirona',
          horario: '08:00',//primeiro horario
          vezes: '2',//vezes ao dia
          soneca: {
            intervalo: '10 minutos',
            repeticoes: '2'
          },
          status: 1 // 1: tomou, 2: pendente, 3: ainda vai tomar
        },
      ],
      c2: [
        {
          nome: 'Cefaliv',
          horario: '12:30',
          vezes: '1',//vezes ao dia
          soneca: {
            intervalo: '15 minutos',
            repeticoes: '3'
          },
          status: 2 // 1: tomou, 2: pendente, 3: ainda vai tomar
        }
      ],
    }
}