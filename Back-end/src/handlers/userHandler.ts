import { Request, Response } from "express";
import { News, newsModel } from "../models/newsModel";

const model = new newsModel();

export const index = async (req: Request, res: Response) => {
  try {
    const news: News[] = await model.index();
    res.json(news);
  } catch (err) {
    res.status(500).send(`Server Error: ${err}`);
  }
};

export const searchById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const news = await model.searchById(id);

    news.publishedat = String(news.publishedat).split("T")[0].split("00")[0];

    res.json(news);
  } catch (err) {
    res.status(500).send(`Server Error: ${err}`);
  }
};

export const searchByTitle = async (req: Request, res: Response) => {
  try {
    const title = req.params.title;
    if (!title) {
      res.status(400).send("[Error]: Didn't entered a title");
      return;
    }

    const news = await model.searchByTitle(title);

    res.json(news);
  } catch (err) {
    res.status(500).send(`Server Error: ${err}`);
  }
};

export const searchBySource = async (req: Request, res: Response) => {
  try {
    const source = req.params.source;
    if (!source) {
      res.status(400).send("[Error]: Didn't entered a title");
      return;
    }

    const news = await model.searchBySource(source);

    res.json(news);
  } catch (err) {
    res.status(500).send(`Server Error: ${err}`);
  }
};
