import { Ticket, TicketTime } from './mockType';


const airports = [
    { code: "AAQ", name: "Анапа" },
    { code: "ABA", name: "Абакан" },
    { code: "AER", name: "Сочи" },
    { code: "ARH", name: "Архангельск" },
    { code: "ASF", name: "Астрахань" },
    { code: "BAX", name: "Барнаул" },
    { code: "BQT", name: "Брест" },
    { code: "CEK", name: "Челябинск" },
    { code: "CSY", name: "Чебоксары"},
    { code: "DME", name: "Москва (Домодедово)" },
    { code: "EGO", name: "Белгород" },
    { code: "ESL", name: "Элиста" },
    { code: "GDX", name: "Магадан" },
    { code: "GOJ", name: "Нижний Новгород" },
    { code: "GRV", name: "Грозный" },
    { code: "IAR", name: "Ярославль" },
    { code: "IKT", name: "Иркутск" },
    { code: "IWA", name: "Иваново" },
    { code: "JOK", name: "Йошкар-Ола" },
    { code: "KGD", name: "Калининград" },
    { code: "KRR", name: "Краснодар" },
    { code: "KUF", name: "Самара" },
    { code: "KZN", name: "Казань" },
    { code: "LLE", name: "Луля-Лаэрдаль" },
    { code: "LED", name: "Санкт-Петербург (Пулково)" },
    { code: "LPP", name: "Липецк" },
    { code: "LPK", name: "Липецк" },
    { code: "MCX", name: "Махачкала" },
    { code: "MRV", name: "Минеральные Воды" },
    { code: "NBC", name: "Нижнекамск" },
    { code: "NOZ", name: "Новокузнецк" },
    { code: "NVR", name: "Новороссийск" },
    { code: "OVB", name: "Новосибирск (Толмачево)" },
    { code: "PEE", name: "Пермь" },
    { code: "PLK", name: "Псков" },
    { code: "REN", name: "Оренбург" },
    { code: "ROV", name: "Ростов-на-Дону" },
    { code: "RTW", name: "Саратов" },
    { code: "RVH", name: "Ржевка" },
    { code: "SGC", name: "Сургут" },
    { code: "SIP", name: "Симферополь" },
    { code: "SJC", name: "Сыктывкар" },
    { code: "SVO", name: "Москва (Шереметьево)" },
    { code: "SVX", name: "Екатеринбург" },
    { code: "TJM", name: "Тюмень" },
    { code: "TQL", name: "Тамбов" },
    { code: "UFA", name: "Уфа" },
    { code: "ULK", name: "Ленск" },
    { code: "URJ", name: "Урай" },
    { code: "UUS", name: "Южно-Сахалинск" },
    { code: "VVO", name: "Владивосток" },
    { code: "YKS", name: "Якутск" },
    { code: "ZIA", name: "Москва (Жуковский)" },
];

const generateTestData = (): Ticket[] => {
    const testData: Ticket[] = [];

    // Генерация случайных данных
    for (let i = 0; i < 30; i++) {
        const ticketTime: TicketTime = generateTicketTime();
        const startDate = new Date(`1970-01-01T${ticketTime.startTime}`);
        const endDate = new Date(`1970-01-01T${ticketTime.endTime}`);
        const duration = Math.floor((endDate.getTime() - startDate.getTime())/60000);

        const ticket: Ticket = {
            id: i + 1,
            from: airports[Math.floor(Math.random() * airports.length)].code,
            to: airports[Math.floor(Math.random() * airports.length)].code,
            company: generateRandomCompany(),
            price: Math.floor(Math.random() * 100000),
            currency: 'RUB',
            time: ticketTime,
            duration: duration,
            date: generateRandomDate(),
            connectionAmount: [0, 1, 2, 3][Math.floor(Math.random() * 4)],
        };

        testData.push(ticket);
    }

    return testData;
};

function generateTicketTime(): TicketTime {
    const startTime = getRandomTime();
    const endTime = getRandomTimeAfter(startTime);
    return {
        startTime: startTime,
        endTime: endTime
    };
}

function getRandomTime(): string {
    const hour = getRandomNumber(0, 23).toString().padStart(2, '0');
    const minute = getRandomNumber(0, 59).toString().padStart(2, '0');
    return `${hour}:${minute}`;
}

function getRandomTimeAfter(startTime: string): string {
    // Генерация времни после начала(для билетов)
    const startHour = Number(startTime.split(':')[0]);
    const startMinute = Number(startTime.split(':')[1]);

    const endHour = getRandomNumber(startHour, 23);
    let endMinute;
    if (endHour === startHour) {
        endMinute = getRandomNumber(startMinute + 1, 59);
    } else {
        endMinute = getRandomNumber(0, 59);
    }

    return `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const generateRandomDate = (): string => {
    const year = new Date().getFullYear();
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

const generateRandomCompany = (): string => {
    const companies = ['victory', 'redWings', 'S7'];
    return companies[Math.floor(Math.random() * companies.length)];
}

export default generateTestData;