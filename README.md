# Casei Barato — Simulador de Casamento Inteligente

Este é um projeto Next.js 15 configurado com Genkit para Inteligência Artificial.

## 🚀 Como fazer o Deploy e manter a IA funcionando

Para que o simulador de IA funcione, o deploy **não** pode ser estático (não use a pasta `out`). A Netlify suporta o Next.js dinâmico nativamente.

### 1. Onde encontrar o Terminal?
**IMPORTANTE:** Não use o "Web Console". O terminal fica na parte inferior desta tela, em uma aba chamada especificamente **"Terminal"**. É nela que você digitará os comandos abaixo.

### 2. Enviar para o GitHub
1. Crie um repositório vazio no seu [GitHub](https://github.com/new).
2. No **Terminal** (não no Web Console), digite um por um:
   ```bash
   git init
   git add .
   git commit -m "feat: setup projeto com IA"
   git branch -M main
   git remote add origin URL_DO_SEU_REPOSITORIO_COPIADA_DO_GITHUB
   git push -u origin main
   ```

### 3. Configurar na Netlify
1. Conecte seu repositório do GitHub na Netlify.
2. A Netlify detectará o Next.js automaticamente.
3. **Variáveis de Ambiente (CRÍTICO):** No painel da Netlify, vá em *Site Settings > Environment Variables* e adicione:
   - `GEMINI_API_KEY`: Sua chave da API do Google Gemini.

## Tecnologias utilizadas
- Next.js 15 (App Router)
- Tailwind CSS & Shadcn UI
- Firebase
- Genkit (IA para estratégias de economia)
