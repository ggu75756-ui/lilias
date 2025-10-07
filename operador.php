<?php
session_start();
if (!isset($_SESSION['tipo_usuario']) || $_SESSION['tipo_usuario'] != 'operador') {
    header('Location: login.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIREBAN - Operador</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1c6f41, #388e3c);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
        }

        .logo {
            width: 100px;
            margin-bottom: 15px;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: bold;
            text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
        }

        h2 {
            font-size: 1.2rem;
            margin-bottom: 30px;
            font-weight: 400;
            opacity: 0.9;
        }

        .buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }

        .buttons a {
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: bold;
            padding: 15px 25px;
            border-radius: 12px;
            background: #2e7d32;
            color: white;
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        .buttons a:hover {
            transform: translateY(-5px);
            box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.5);
            background: #1b5e20;
        }

        footer {
            margin-top: 40px;
            font-size: 0.9rem;
            opacity: 0.8;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="logo_sireban.png" alt="Logo SIREBAN" class="logo">
        <h1>Bienvenido, Operador</h1>
        <h2>SIREBAN - Finca Las Lilias</h2>
        <div class="buttons">
            <a href="registro_plagas.php">📋 Registrar Plagas</a>
            <a href="registro_tratamientos.php">💊 Registrar Tratamientos</a>
            <a href="registro_mezclas.php">⚗️ Registrar Mezclas</a>
            <a href="registro_productos.php">📦 Registrar Productos</a>
            <a href="logout.php">🚪 Cerrar Sesión</a>
        </div>
        <footer>© 2025 SIREBAN - Finca Las Lilias</footer>
    </div>
</body>
</html>
