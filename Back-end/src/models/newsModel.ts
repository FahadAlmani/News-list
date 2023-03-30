import client from "../database";

export type News = {
  id?: number;
  title: string;
  description: string;
  URL: string;
  ImageUrl: string;
  content: string;
  source: string;
  publishedat: string;
};

export class newsModel {
  index = async (): Promise<News[]> => {
    const connection = await client.connect();
    const SQL = `SELECT * FROM news`;
    const result = await connection.query(SQL);
    const news: News[] = result.rows;
    connection.release();
    return news;
  };

  searchById = async (id: number): Promise<News> => {
    const connection = await client.connect();
    const SQL = `SELECT * FROM news WHERE id = '${id}'`;
    const result = await connection.query(SQL);
    const news: News = result.rows[0];
    connection.release();
    return news;
  };

  searchByTitle = async (title: string): Promise<News[]> => {
    const connection = await client.connect();
    const SQL = `SELECT * FROM news WHERE Title LIKE '%${title}%'`;
    const result = await connection.query(SQL);
    const news: News[] = result.rows;
    connection.release();
    return news;
  };

  searchBySource = async (source: string): Promise<News[]> => {
    const connection = await client.connect();
    const SQL = `SELECT * FROM news WHERE source LIKE '%${source}%'`;
    const result = await connection.query(SQL);
    const news: News[] = result.rows;
    connection.release();
    return news;
  };
}
