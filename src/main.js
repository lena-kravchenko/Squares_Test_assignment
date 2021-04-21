'use strict';

const tbody = document.querySelector('tbody');
const rows = document.querySelector('tr');
const cells = document.querySelectorAll('td');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const minCountOfRowsOrColumns = 1;

function appendRow() {
  const row = tbody.children[0].cloneNode(true);

  tbody.append(row);

  removeRowButton.disabled = false;
}

function removeRow() {
  tbody.lastElementChild.remove();

  if (tbody.children.length === minCountOfRowsOrColumns) {
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

  if (rows.children.length <= minCountOfRowsOrColumns) {
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

function moveRemoveRowButton() {
  removeRowButton.style.position = 'relative';

  removeRowButton.style.top = tbody.clientHeight / 5;
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

document.addEventListener('mouseover', event => {
  if ([...cells].includes(event.target)) {
    showRemoveButtons();
  }
});

document.addEventListener('mouseout', event => {
  if ([...cells].includes(event.target)) {
    hideRemoveButtons();
  }
});
