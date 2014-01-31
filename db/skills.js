/***
 * Master list of skills that should be in the DB.
 ***/
 
exports.skills = [
  { id: 'acrobatics', name: 'Acrobatics', untrained: true, stat: 'dex', armor: true, multi: false },
  { id: 'appraise', name: 'Appraise', untrained: true, stat: 'int', armor: false, multi: false },
  { id: 'bluff', name: 'Bluff', untrained: true, stat: 'cha', armor: false, multi: false },
  { id: 'climb', name: 'Climb', untrained: true, stat: 'str', armor: true, multi: false },
  { id: 'craft', name: 'Craft', untrained: true, stat: 'int', armor: false, multi: true, subtypes: ['alchemy', 'armor', 'baskets', 'books', 'bows', 'calligraphy', 'carpentry', 'cloth', 'clothing', 'glass', 'jewelry', 'leather', 'locks', 'painting', 'pottery', 'sculptures', 'ships', 'shoes', 'stonemasonry', 'traps', 'weapons'] },
  { id: 'diplomacy', name: 'Diplomacy', untrained: true, stat: 'cha', armor: false, multi: false },
  { id: 'disable_device', name: 'Disable Device', untrained: false, stat: 'dex', armor: true, multi: false },
  { id: 'disguise', name: 'Disguise', untrained: true, stat: 'cha', armor: false, multi: false },
  { id: 'escape_artist', name: 'Escape Artist', untrained: true, stat: 'dex', armor: true, multi: false },
  { id: 'fly', name: 'Fly', untrained: true, stat: 'dex', armor: true, multi: false },
  { id: 'handle_animal', name: 'Handle Animal', untrained: false, stat: 'cha', armor: false, multi: false },
  { id: 'heal', name: 'Heal', untrained: true, stat: 'wis', armor: false, multi: false },
  { id: 'intimidate', name: 'Intimidate', untrained: true, stat: 'cha', armor: false, multi: false },
  { id: 'knowledge', name: 'Knowledge', untrained: false, stat: 'int', armor: false, multi: true, subtypes: ['arcana', 'dungeoneering', 'engineering', 'geography', 'history', 'local', 'nature', 'nobility', 'planes', 'religion'] },
  { id: 'linguistics', name: 'Linguistics', untrained: false, stat: 'int', armor: false, multi: false },
  { id: 'perception', name: 'Perception', untrained: true, stat: 'wis', armor: false, multi: false },
  { id: 'perform', name: 'Perform', untrained: true, stat: 'cha', armor: false, multi: true, subtypes: ['act', 'comedy', 'dance', 'keyboard', 'oratory', 'percussion', 'strings', 'wind', 'singing'] },
  { id: 'profession', name: 'Profession', untrained: false, stat: 'wis', armor: false, multi: true, subtypes: ['architect','baker','barrister','brewer','butcher','clerk','cook','courtesan','driver','engineer','farmer','fisherman','gambler','gardener','herbalist','innkeeper','librarian','merchant','midwife','miller','miner','porter','sailor','scribe','shepherd','stable master','soldier','tanner','trapper','woodcutter'] },
  { id: 'ride', name: 'Ride', untrained: true, stat: 'dex', armor: true, multi: false },
  { id: 'sense_motive', name: 'Sense Motive', untrained: true, stat: 'wis', armor: true, multi: false },
  { id: 'sleight_of_hand', name: 'Sleight of Hand', untrained: false, stat: 'dex', armor: true, multi: false },
  { id: 'spellcraft', name: 'Spellcraft', untrained: false, stat: 'int', armor: true, multi: false },
  { id: 'stealth', name: 'Stealth', untrained: true, stat: 'dex', armor: true, multi: false },
  { id: 'survival', name: 'Survival', untrained: true, stat: 'wis', armor: false, multi: false },
  { id: 'swim', name: 'Swim', untrained: true, stat: 'str', armor: true, multi: false },
  { id: 'use_magic_device', name: 'Use Magic Device', untrained: false, stat: 'cha', armor: false, multi: false },
];

  


