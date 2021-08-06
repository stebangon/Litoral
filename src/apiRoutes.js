const telefonoWhatsapp = '9999202109';
const rutaBaseBD = 'https://litoral-866cd-default-rtdb.firebaseio.com/';
const cloudName = 'dw9qbofnp';
const uploadPreset = 'uqmmj7ru';
export const cargarImagenes =
  'https://api.cloudinary.com/v1_1/' +
  cloudName +
  '/image/upload?upload_preset=' +
  uploadPreset;
export const loadDepartamentos = rutaBaseBD + 'departamentos.json';
export const loadGalerias = rutaBaseBD + 'galeria.json';
export const loadSolicitudes = rutaBaseBD + 'solicitudes.json';
export const loadSolicitudesRevisadas =
  rutaBaseBD + 'solicitudes-revisadas.json';
export const getBrochure =
  'https://firebasestorage.googleapis.com/v0/b/litoral-866cd.appspot.com/o/brochure.pdf?alt=media&token=7dc741e3-2b71-4ce7-b095-9db319dbf1c8';
export const getURLWhatsapp =
  'https://api.whatsapp.com/send?phone=' +
  telefonoWhatsapp +
  '&text=Hola!%20requiero%20información%20por%20favor!';
