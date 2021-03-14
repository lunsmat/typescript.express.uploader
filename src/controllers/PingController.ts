import { Request, Response } from "express";

class PingController {
    index(request: Request, response: Response) {
        return response.json({
            pong: true
        });
    }
}

export { PingController };
