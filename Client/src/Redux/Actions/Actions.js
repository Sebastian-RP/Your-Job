export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";

export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}
