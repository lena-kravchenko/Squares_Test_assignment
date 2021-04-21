'use strict';

const tbody = document.querySelector('tbody');
const rows = document.querySelector('tr');
const container = document.querySelector('.container');
const paddingOfContainer = 60;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const minAmountOfRowsOrColumns = 1;

function appendRow() {
  const row = tbody.children[0].cloneNode(true);

  tbody.append(row);

  removeRowButton.disabled = false;
}

function removeRow() {
  tbody.lastElementChild.remove();
  removeRowButton.style.display = 'none';

  if (tbody.children.length === minAmountOfRowsOrColumns) {
    removeRowButton.disabled = true;
  }
}

function appendColumn() {
  [...tbody.children].map(child => {
    const column = document.createElement('td');

    child.append(column);
  });

  removeColumnButton.disabled = false;
}

function removeColumn() {
  [...tbody.children].map(child => {
    child.lastElementChild.remove();
  });
  removeColumnButton.style.display = 'none';

  if (rows.children.length <= minAmountOfRowsOrColumns) {
    removeColumnButton.disabled = true;
  }
}

function showRemoveButtons() {
  removeRowButton.style.display = 'block';
  removeColumnButton.style.display = 'block';
}

function hideRemoveButtons() {
  removeRowButton.style.display = 'none';
  removeColumnButton.style.display = 'none';
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

document.addEventListener('mouseover', event => {
  if (tbody.contains(event.target)) {
    showRemoveButtons();

    removeRowButton.style.top = event.clientY - event.offsetY + 'px';
    removeColumnButton.style.left = event.clientX - event.offsetX - window.innerWidth / 2 + tbody.clientWidth / 2 + paddingOfContainer + 'px';
  }
});

document.addEventListener('mouseover', event => {
  if (!container.contains(event.target)) {
    hideRemoveButtons();
  }
});
