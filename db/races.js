/***
 * Master list of races that should be in the DB.
 ***/
 
exports.races = [
  { id: 'human', name: "Human", stats: {} },
  { id: 'elf', name: "Elf", stats: {'dex':2,'int':2,'con':-2}, size:'m', speed:'30' },
  { id: 'gnome', name: "Gnome", stats: {'con':2,'cha':2,'str':-2}, size:'s', speed:'20' }
];