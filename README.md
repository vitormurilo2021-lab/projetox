# Casei Barato — Simulador de Casamento Inteligente

Este é um projeto Next.js 15 configurado com Genkit para Inteligência Artificial.

## Como configurar o deploy na Netlify (Mantendo a IA ativa)

Para que o simulador de IA funcione, o deploy deve ser feito de forma dinâmica (não use a pasta `out`).

### 1. Enviar para o GitHub
1. Crie um repositório no GitHub.
2. No terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: setup projeto com IA"
   git branch -M main
   git remote add origin URL_DO_SEU_REPOSITORIO
   git push -u origin main
   ```

### 2. Configurar na Netlify
1. Conecte o repositório do GitHub na Netlify.
2. A configuração padrão será detectada automaticamente através do arquivo `netlify.toml`.
3. **Variáveis de Ambiente:** No painel da Netlify, adicione a chave `GEMINI_API_KEY` nas configurações de ambiente (Environment Variables) para que o simulador possa realizar as chamadas de IA.

## Tecnologias utilizadas
- Next.js 15 (App Router)
- Tailwind CSS & Shadcn UI
- Firebase (Configurado para o futuro)
- Genkit (IA para estratégias de economia)
