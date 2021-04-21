export function convertDurationToTimeString(duration: number) {
  /**
   * (60 * 60) a mesma coisa que 3600.
   * duration * 60 convertendo para minutos.
   * dureation * 60 * 60 convertendo para houras.
   * (duration % 3600) pegando o resto da divição de duration / 3600 que no caso são os segundos.
   * (duration % 3600) / 60 convertendo para minutos.
   */

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(":");

  return timeString;
}