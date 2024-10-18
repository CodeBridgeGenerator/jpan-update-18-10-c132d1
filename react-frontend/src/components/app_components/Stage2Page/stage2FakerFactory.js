
import { faker } from "@faker-js/faker";
export default (user,count,calonIds,PelulusIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
nomborRujukan: faker.lorem.sentence(1),
tajukLatihan: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
calon: calonIds[i % calonIds.length],
Pelulus: PelulusIds[i % PelulusIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
