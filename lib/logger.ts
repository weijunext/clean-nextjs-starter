import * as fs from 'fs';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const logDir: string = process.env.LOG_DIR || 'log'; // 使用环境变量或默认值

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const fileTransport = new winston.transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '3d',  // 保留3天的日志
  level: 'info',   // 此传输层记录info及以上级别的日志（info, warning, error）
});

const logger: winston.Logger = winston.createLogger({
  level: 'debug', // 最低级别
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.json()
  ),
  transports: [
    fileTransport,
    new winston.transports.Console({
      level: 'debug', // 控制台同时也输出所有级别的日志
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

export default logger;
