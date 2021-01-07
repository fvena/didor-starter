import AppError from '/Core/services/Error.service';

const mapError = {
  default: ['00', 'Error por defecto, se aplica cuando no se especifica ningún código de error', false],
  offline: ['01', 'No hay conexión de internet', true],
  backendDown: ['02', 'El backend no responde', true],
  timeout: ['03', 'La petición se ha cancelado por tardar demasiado tiempo', false],
  endPointNotFound: ['04', 'La ruta de la petición no se encuentra', false],
  langNotFound: ['20', 'El idioma seleccionado no se encuentra entre los idiomas disponibles', false],
  notRule: ['10', 'No existe la regla de validación', false],
  notFieldRule: ['11', 'No existen reglas de validación para el campo', false],
  invalidData: ['12', 'Los datos recibidos no son válidos', false],
};

/**
 * Errores personalizados dentro de la aplicación
 *
 * @param {String} error - Nombre del error
 */
class CoreError extends AppError {
  constructor(error, customDescription) {
    super(error, 'core', 'Cx', mapError, customDescription);
  }
}

export default CoreError;
