document.addEventListener("DOMContentLoaded", () => {
    const plagaSelect = document.getElementById("plagaSelect");
    const plagaInfo = document.getElementById("plagaInfo");
    const tratamientoInfo = document.getElementById("tratamientoInfo");
    const areaInput = document.getElementById("areaInput");
    const calculateButton = document.getElementById("calculateButton");
    const ctx = document.getElementById("impactChart").getContext("2d");

    // 📌 Catálogo oficial de plagas/enfermedades en Finca Las Lilias - SIREBAN
    const plagas = {
        "Picudo negro del plátano": {
            cientifico: "Cosmopolites sordidus",
            tipo: "Insecto",
            descripcion: "Perfora los pseudotallos debilitando la planta y reduciendo la producción. Sus larvas se alimentan del tejido interno, lo que puede provocar la caída de la planta.",
            tratamiento: "Control biológico (nematodos entomopatógenos, hongos), trampas de feromonas, manejo cultural (limpieza de residuos)."
        },
        "Trips del plátano": {
            cientifico: "Chaetanaphothrips signipennis",
            tipo: "Insecto",
            descripcion: "Se alimenta de la savia de hojas y frutos, causando manchas plateadas y deformaciones. También transmite enfermedades virales.",
            tratamiento: "Uso de trampas adhesivas, insecticidas selectivos, manejo cultural y control biológico."
        },
        "Sigatoka negra": {
            cientifico: "Mycosphaerella fijiensis",
            tipo: "Enfermedad fúngica",
            descripcion: "Causa manchas negras en las hojas que se expanden y provocan necrosis. Reduce la fotosíntesis y la producción de frutos.",
            tratamiento: "Aplicación de fungicidas específicos, eliminación de hojas afectadas y uso de variedades resistentes."
        },
        "Moko del plátano": {
            cientifico: "Ralstonia solanacearum",
            tipo: "Enfermedad bacteriana",
            descripcion: "Provoca marchitamiento rápido y manchas marrones en pseudotallos. Se transmite por suelo, agua y material de siembra.",
            tratamiento: "Eliminación de plantas infectadas, desinfección de herramientas y control estricto del material de siembra."
        },
        "Araña roja (ácaros)": {
            cientifico: "Tetranychus tumidus, Banks",
            tipo: "Ácaro",
            descripcion: "Provoca decoloración progresiva en hojas, que pasan a marrón o gris, y en ataques severos genera defoliación.",
            tratamiento: "Liberación de depredadores naturales, acaricidas y manejo de humedad en el cultivo."
        }
    };

    // 🔹 Mostrar información según la plaga seleccionada
    plagaSelect.addEventListener("change", () => {
        const plaga = plagas[plagaSelect.value];
        if (plaga) {
            plagaInfo.innerHTML = `
                <strong>📌 Nombre científico:</strong> <em>${plaga.cientifico}</em><br>
                <strong>🔎 Tipo:</strong> ${plaga.tipo}<br>
                <strong>⚠️ Descripción:</strong> ${plaga.descripcion}
            `;
            tratamientoInfo.innerHTML = `
                <strong>💊 Tratamiento recomendado:</strong> ${plaga.tratamiento}
            `;
        } else {
            plagaInfo.innerHTML = "";
            tratamientoInfo.innerHTML = "";
        }
    });

    // 🔹 Simulación de propagación en área
    calculateButton.addEventListener("click", () => {
        const area = parseFloat(areaInput.value);
        if (isNaN(area) || area <= 0) {
            alert("⚠️ Ingresa un área válida en m²");
            return;
        }

        const tasaPropagacion = 0.025; // 2.5% de avance diario
        const dias = 60;
        let progreso = [area];

        for (let dia = 1; dia < dias; dia++) {
            progreso.push(progreso[dia - 1] * (1 + tasaPropagacion));
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: dias }, (_, i) => i + 1),
                datasets: [{
                    label: 'Área afectada en 60 días (m²)',
                    data: progreso,
                    borderColor: '#1C6F41',  // Verde institucional SIREBAN
                    backgroundColor: 'rgba(28, 111, 65, 0.3)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 2
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: '📊 Proyección de Propagación - SIREBAN',
                        color: '#2D5C24',
                        font: { size: 18, weight: 'bold' }
                    }
                },
                scales: {
                    x: { title: { display: true, text: 'Días', color: '#4A4AAA' }},
                    y: { title: { display: true, text: 'Área afectada (m²)', color: '#4A4AAA' }}
                },
                responsive: true
            }
        });
    });
});
