/***
 * Master list of skills that should be in the DB.
 ***/
 
exports.skills = [
  { name: 'acrobatics', untrained: true, stat: 'dex', armor: true, multi: false },
  { name: 'appraise', untrained: true, stat: 'int', armor: false, multi: false },
  { name: 'bluff', untrained: true, stat: 'cha', armor: false, multi: false },
  { name: 'climb', untrained: true, stat: 'str', armor: true, multi: false },
  { name: 'craft', untrained: true, stat: 'int', armor: false, multi: true, subtypes: ['alchemy', 'armor', 'baskets', 'books', 'bows', 'calligraphy', 'carpentry', 'cloth', 'clothing', 'glass', 'jewelry', 'leather', 'locks', 'painting', 'pottery', 'sculptures', 'ships', 'shoes', 'stonemasonry', 'traps', 'weapons'] },
  { name: 'diplomacy', untrained: true, stat: 'cha', armor: false, multi: false },
  { name: 'disable_device', untrained: false, stat: 'dex', armor: true, multi: false },
  { name: 'disguise', untrained: true, stat: 'cha', armor: false, multi: false },
  { name: 'escape_artist', untrained: true, stat: 'dex', armor: true, multi: false },
  { name: 'fly', untrained: true, stat: 'dex', armor: true, multi: false },
  { name: 'handle_animal', untrained: false, stat: 'cha', armor: false, multi: false },
  { name: 'heal', untrained: true, stat: 'wis', armor: false, multi: false },
  { name: 'intimidate', untrained: true, stat: 'cha', armor: false, multi: false },
  { name: 'knowledge', untrained: false, stat: 'int', armor: false, multi: true, subtypes: ['arcana', 'dungeoneering', 'engineering', 'geography', 'history', 'local', 'nature', 'nobility', 'planes', 'religion'] },
  { name: 'linguistics', untrained: false, stat: 'int', armor: false, multi: false },
  { name: 'perception', untrained: true, stat: 'wis', armor: false, multi: false },
  { name: 'perform', untrained: true, stat: 'cha', armor: false, multi: true, subtypes: ['act', 'comedy', 'dance', 'keyboard', 'oratory', 'percussion', 'strings', 'wind', 'singing'] },
  { name: 'profession', untrained: false, stat: 'wis', armor: false, multi: true, subtypes: ['architect','baker','barrister','brewer','butcher','clerk','cook','courtesan','driver','engineer','farmer','fisherman','gambler','gardener','herbalist','innkeeper','librarian','merchant','midwife','miller','miner','porter','sailor','scribe','shepherd','stable master','soldier','tanner','trapper','woodcutter'] },
  { name: 'ride', untrained: true, stat: 'dex', armor: true, multi: false },
  { name: 'sense_motive', untrained: true, stat: 'wis', armor: true, multi: false },
  { name: 'sleight_of_hand', untrained: false, stat: 'dex', armor: true, multi: false },
  { name: 'spellcraft', untrained: false, stat: 'int', armor: true, multi: false },
  { name: 'stealth', untrained: true, stat: 'dex', armor: true, multi: false },
  { name: 'survival', untrained: true, stat: 'wis', armor: false, multi: false },
  { name: 'swim', untrained: true, stat: 'str', armor: true, multi: false },
  { name: 'use_magic_device', untrained: false, stat: 'cha', armor: false, multi: false },
];

  


