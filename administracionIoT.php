<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/normalize.css">
    <link rel="stylesheet" href="./styles/menuNavStyles.css">
    <link rel="stylesheet" href="./styles/administracionIoT.css">
    <title>Document</title>
</head>
<body>

    <header>
        <figure><img src="./img/Logo.png" alt="Logo"></figure>

        <div class="btn-header">
            <button>Opción 1</button>
            <button>Opción 2</button>
        </div>
    </header>
    
    <div class="container">
        <div class="nav">
            <h2>Menu Navegación</h2>
        </div>
    </div>

    <main>
        <div class="container-main">
            <h1>Control de Dispositivos IoT</h1>

            <div class="tabla">
                <table>
                    <thead>
                        <tr>
                            <th>Modelo ID</th>
                            <th>Nombre</th>
                            <th>Nombre Planta</th>
                            <th>Variable Medida</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>8392</td>
                            <td>Dispositivo IoT</td>
                            <td>Nombre de Planta</td>
                            <td>Variable que mide</td>
                            <td>
                                <div class="btns-table">
                                    <button>Actualizar</button>
                                    <button>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                    <?php include 'Navbar.html'; ?>
                </table>
            </div>
        </div>
    </main>

</body>
</html>