function converterHora(horario24){
    const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[1]

    const hora12 = hora % 12 || 12

    let periodo = "AM";

    if(hora > 12){
        periodo = "PM";
    }

    console.log(`${hora12}:${minuto} ${periodo}`);
    
}
converterHora("14:30");
converterHora("17:30");
converterHora("10:30");