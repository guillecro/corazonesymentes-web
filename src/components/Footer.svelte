<script>
  import logoCircle from '/static/logo-circular.png';
  import developers from '/static/developers2.png';
</script>
<style>
  .logo{
    width: 150px;
  }
  .developers{
    width: 160px;
  }
</style>
<div class="bg-gray-200 p-10">
  <div class="container mx-auto">
    <div class="flex justify-between align-center">
      <img class="logo" src={logoCircle} alt="corazones y mentes logo" />
      <div class="flex flex-col justify-center">
        <small class="text-xs">Desarrollado por:</small>
        <img class="developers" src={developers} alt="democracya en red, plataforma democratica fundacion fhc centro edelstein" />
      </div>
      <ul class="uppercase text-bold">
        <li><a href="#home">Home</a></li>
        <li><a href="#todaladata">#todaladata</a></li>
        <li><a href="#articulo">Artículo</a></li>
        <li><a href="#foro-docente">foro docente</a></li>
        <li><a href="#kit-de-herramientas">kit de herramientas</a></li>
      </ul>
    </div>
    <p class="text-center text-xs text-bold">Corazones y Mentes 2021. Todos los derechos reservados</p>
  </div>
</div>