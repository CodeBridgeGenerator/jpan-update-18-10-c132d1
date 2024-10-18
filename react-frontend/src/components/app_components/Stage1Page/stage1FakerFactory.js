
import { faker } from "@faker-js/faker";
export default (user,count,pelulusIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
nomborRujukan: faker.lorem.sentence(""),
tajukLatihan: faker.lorem.sentence(""),
dokumen: faker.lorem.sentence(""),
kategori: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),
pelulus: pelulusIds[i % pelulusIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
