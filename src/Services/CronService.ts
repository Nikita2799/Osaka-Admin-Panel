import { CronJob } from "cron";
import axios from "axios";
import { CurrencyWorker } from "../Database/Workers/CurrencyWorker";

export class CronService {
  private cron;
  private time = "0 0 * * *";
  private currencyWorker = new CurrencyWorker();
  constructor() {
    this.cron = new CronJob(this.time, this.get_currency, null, true);
  }

  private async get_currency() {
    try {
      const { data } = await axios.get(
        `https://api.apilayer.com/currency_data/live?source=USD&currencies=JPY`,
        {
          headers: {
            apikey: "QsznuXJi6UCvT0SsxbEPYcamSreDC3kF",
          },
        }
      );
      await this.currencyWorker.update({ jpy: data.quotes.USDJPY });
    } catch (err) {
      console.log(err);
    }
  }

  start_cron() {
    this.cron.start();
  }
}
