<template>
  <div class="container">
    <form class="card">
      <h1>Анкета на Vue разработчика!</h1>
      <div class="form-control">
        <label for="name">Как тебя зовут?</label>
        <input type="text" id="name" placeholder="Введи имя">
      </div>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" value="20">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox"/> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
