

export function auditLog(_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  return {
    value(this: any, subject: { format(): string },  ...args: any[]){
      descriptor.value.apply(this, [subject, ...args]);
      console.log(`[${subject.format()}]: ${propertyKey}`);
    }
  }
}