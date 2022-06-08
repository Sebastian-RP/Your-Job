export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_USER_INFO = "GET_USER_INFO";

export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}

export function userInfo() {
  return {
    type: GET_USER_INFO,
    payload: {
      name: 'josé gregorio sarabia',
      email: 'jsarabialugo@gmail.com',
      employment_status: 'desempleado',
      age: '23',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9qDzqD1OkdeylfTqsRCjU5Gz-WAbSrjuEA&usqp=CAU',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      technologies: ['javascript', 'css', 'html', 'sequelize', 'tipescript'],
      nationality: 'Colombiano',
      CVurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxepDHJv_NFt5Y78GpbeIGDc4e8VlqsWUww&usqp=CAU'
    }
  }
}