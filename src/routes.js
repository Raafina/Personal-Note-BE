const {
  addNoteHandler,
  getAllNoteHandler,
  getNoteByIdHandler,
  updateNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const route = [
  {
    path: '/notes',
    method: 'POST',
    handler: addNoteHandler,
  },
  { path: '/notes', method: 'GET', handler: getAllNoteHandler },
  { path: '/notes/{id}', method: 'GET', handler: getNoteByIdHandler },
  { path: '/notes/{id}', method: 'PUT', handler: updateNoteByIdHandler },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = route;
