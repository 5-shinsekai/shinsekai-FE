# 1단계: 빌드
FROM node:22 AS builder

WORKDIR /app

# .env.production 포함해서 복사
COPY . .
COPY .env.production .env.production

RUN npm install
RUN npm run build

# 2단계: 실행용 이미지
FROM node:22-alpine

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]