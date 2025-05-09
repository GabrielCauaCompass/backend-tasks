"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    constructor(authService) {
        this.authService = authService;
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    async register(req, res) {
        const { email, password, name, phone_number } = req.body;
        if (!email || !password || !name || !phone_number) {
            res.status(400).json({ error: "Campos obrigatórios ausentes" });
            return;
        }
        try {
            const result = await this.authService.register({
                email,
                password,
                name,
                phone_number,
            });
            res.status(201).json(result);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email e senha obrigatórios" });
            return;
        }
        try {
            const result = await this.authService.login(email, password);
            res.json(result);
        }
        catch (err) {
            res
                .status(401)
                .json({ error: "Email ou senha inválidos", falha: err });
        }
    }
    async refresh(req, res) {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            res.status(400).json({ error: "refreshToken obrigatório" });
            return;
        }
        try {
            const result = await this.authService.refresh(refreshToken);
            res.json(result);
        }
        catch (err) {
            res.status(500).json({ error: "Erro ao renovar o token" });
        }
    }
}
exports.default = AuthController;
