




let auditLog = function<T extends { format(): void, formatIban: string }>(subject: T, bla: string){
    console.log(`[${subject.formatIban}]: ${bla}`)
}

