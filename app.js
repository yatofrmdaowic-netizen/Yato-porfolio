const services = [
  'WhatsApp Bot Development',
  'Telegram Bot Development',
  'Web Development'
];

const skills = [
  { name: 'HTML', level: 50 },
  { name: 'JavaScript', level: 98 },
  { name: 'Python', level: 56 },
  { name: 'Next.js', level: 25 },
  { name: 'Node.js', level: 98 }
];

const channels = [
  { name: 'WhatsApp Channel', url: 'https://wa.me/1234567890' },
  { name: 'Telegram Channel', url: 'https://t.me/yatoportfolio' }
];

const socialMedia = [
  { name: 'Telegram', label: '@yatoportfolio', url: 'https://t.me/yatoportfolio' },
  { name: 'WhatsApp', label: '+1 234 567 890', url: 'https://wa.me/1234567890' },
  { name: 'Instagram', label: '@yato.portfolio', url: 'https://instagram.com/yato.portfolio' }
];

const serviceList = document.getElementById('service-list');
services.forEach((service) => {
  const listItem = document.createElement('li');
  listItem.textContent = service;
  serviceList.appendChild(listItem);
});

const skillsList = document.getElementById('skills-list');
skills.forEach((skill) => {
  const item = document.createElement('div');
  item.className = 'skill-item';

  const label = document.createElement('div');
  label.className = 'skill-label';
  label.textContent = `${skill.name} ${skill.level}%`;

  const bar = document.createElement('div');
  bar.className = 'skill-bar';

  const fill = document.createElement('span');
  fill.className = 'skill-fill';
  fill.style.width = `${skill.level}%`;

  bar.appendChild(fill);
  item.appendChild(label);
  item.appendChild(bar);
  skillsList.appendChild(item);
});

const socialList = document.getElementById('social-list');
socialMedia.forEach((account) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<strong>${account.name}</strong>: <a href="${account.url}" target="_blank" rel="noopener noreferrer">${account.label}</a>`;
  socialList.appendChild(listItem);
});

const channelLinks = document.getElementById('channel-links');
channels.forEach((channel) => {
  const link = document.createElement('a');
  link.className = 'channel-pill';
  link.href = channel.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = channel.name;
  channelLinks.appendChild(link);
});

document.getElementById('year').textContent = new Date().getFullYear();
