'use strict';

// Dados comerciais confirmados no perfil oficial em 15/09/2026.
// Após confirmar o endereço, preencha o texto e a busca abaixo.
const POINT = Object.freeze({
  whatsapp: '5564993294513',
  message: 'Olá! Vim pelo site da Point Burguer e gostaria de fazer um pedido.',
  address: '',
  mapQuery: 'Point Burguer, Av. Bandeirantes, 835, Anicuns GO'
});

document.querySelectorAll('[data-order]').forEach(link => {
  const detail = link.dataset.product;
  const message = POINT.message + (detail ? ` Gostaria de consultar ${detail}.` : '');
  link.href = `https://wa.me/${POINT.whatsapp}?text=${encodeURIComponent(message)}`;
});

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.hidden = false;
document.documentElement.classList.add('js');
function closeMenu(restoreFocus = false) {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
  if (restoreFocus) menu.focus();
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
const desktop = matchMedia('(min-width: 901px)');
desktop.addEventListener('change', () => closeMenu());
document.querySelector('#year').textContent = String(new Date().getFullYear());
document.querySelector('#map-link').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(POINT.mapQuery)}`;
if (POINT.address) document.querySelector('#address-detail').textContent = POINT.address;
