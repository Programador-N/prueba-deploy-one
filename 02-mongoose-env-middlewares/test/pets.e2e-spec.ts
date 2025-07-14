import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PetsService } from './../src/pets/pets.service';

describe('PetsController (e2e)', () => {
  let app: INestApplication;
  let petsService = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PetsService)
      .useValue(petsService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  describe('POST /api/pets', () => {
    it('should create a pet successfully', async () => {
      const createPetDto = { nombre: 'Buddy', edad: 5 };
      const expectedResult = { _id: 'someId', ...createPetDto };
      petsService.create.mockResolvedValue(expectedResult);

      const response = await request(app.getHttpServer())
        .post('/api/pets')
        .send(createPetDto)
        .expect(201);

      expect(response.body).toEqual(expectedResult);
      expect(petsService.create).toHaveBeenCalledWith(createPetDto);
    });

    it('should return 400 if validation fails (missing nombre)', async () => {
      const createPetDto = { edad: 5 }; // Missing nombre

      const response = await request(app.getHttpServer())
        .post('/api/pets')
        .send(createPetDto)
        .expect(400);

      expect(response.body.message).toContain('nombre es requerido, y de tipo string');
      expect(petsService.create).not.toHaveBeenCalled();
    });

    it('should return 400 if validation fails (invalid edad)', async () => {
      const createPetDto = { nombre: 'Buddy', edad: 'cinco' }; // Invalid edad

      const response = await request(app.getHttpServer())
        .post('/api/pets')
        .send(createPetDto)
        .expect(400);

      expect(response.body.message).toContain('edad must be an integer number');
      expect(petsService.create).not.toHaveBeenCalled();
    });
  });

  describe('GET /api/pets', () => {
    it('should return an array of pets', async () => {
      const mockPets = [
        { _id: 'id1', nombre: 'Buddy', edad: 5 },
        { _id: 'id2', nombre: 'Lucy', edad: 2 },
      ];
      petsService.findAll.mockResolvedValue(mockPets);

      const response = await request(app.getHttpServer())
        .get('/api/pets')
        .expect(200);

      expect(response.body).toEqual(mockPets);
      expect(petsService.findAll).toHaveBeenCalled();
    });

    it('should return an empty array if no pets exist', async () => {
      petsService.findAll.mockResolvedValue([]);

      const response = await request(app.getHttpServer())
        .get('/api/pets')
        .expect(200);

      expect(response.body).toEqual([]);
      expect(petsService.findAll).toHaveBeenCalled();
    });
  });
});
