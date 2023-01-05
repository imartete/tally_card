export default function toNumWithComa(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
