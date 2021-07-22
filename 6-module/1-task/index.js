/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this._rows = [...rows]  
    this._table = document.createElement('table')
    this._table.innerHTML = this._renderTable()
    this._onButtonClick()
  }

  

  _renderTable() {
    return `
    <table>
      <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
        ${this._rows.map(row => `
            <tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.salary}</td>
              <td>${row.city}</td>
              <td><button>X</button></td>
            </tr>
          `).join('')
        }
      </tbody>
    </table>
    `
  }

  _onButtonClick() {
    this._table.querySelectorAll('button').forEach((e) => {
      e.addEventListener('click', (event) => {
        return event.currentTarget.parentElement.parentElement.remove()
      }, { once : true })
    })
  }

  get elem() {
    return this._table
  }
}
