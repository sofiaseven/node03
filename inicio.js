module.exports = {
  historia: function(personaje, lugar, edad){
    if (edad > 18 && edad < 80) {
      return `El doctor ${personaje} vivía en un lugar llamado ${lugar} no encontraba la salida del hospital abandonado. Tenía ${edad} años cuanod quedó atrapado.`
    }else if (edad > 80) {
      return `Después de viajar por el mundo por ${edad} años, ${personaje} había encontrado la sabiduría suficiente como para saber que el secreto de la felicidad es tener un perrito bebé`
    }else {
      return `El doctor ${personaje} Tenía ${edad} años, cuando encontró un lugar llamado ${lugar} en el que vivía muy feliz.`
    }


  }
}
