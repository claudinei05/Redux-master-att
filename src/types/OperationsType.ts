interface OperationsType {
  id: number;
  value: number;
  type: "D" | "W" | string;
  description?: string;
  account?: number;
  digit?: number;
}

export default OperationsType;
