import { buildWinPercentReportHeadless } from './calculator.js';

export const handler = async (event) => {
  let reqBody = JSON.parse(event.body);
  let winPercentReport = buildWinPercentReportHeadless(
    reqBody.battleJsonList,
    reqBody.buildModel,
    reqBody.calculatorStateList,
  );
  // TODO implement
  const response = {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Origin" : "*",
    },
    multiValueHeaders: {},
    body: JSON.stringify(winPercentReport),
  };
  return response;
};
