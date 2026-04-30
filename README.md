# Casei Barato — Simulador de Casamento Inteligente

Este é um projeto Next.js 15 configurado com Genkit para Inteligência Artificial.

## 🚀 Como fazer o Deploy e manter a IA funcionando

Para que o simulador de IA funcione, o deploy **não** pode ser estático (não use a pasta `out`). A Netlify suporta o Next.js dinâmico nativamente.

### 1. Onde encontrar o Terminal?
O terminal fica na parte inferior desta tela, em uma aba chamada especificamente **"Terminal"**. Não use o "Web Console".

### 2. Enviar para o GitHub
1. Crie um repositório vazio no seu [GitHub](https://github.com/new).
2. No **Terminal**, digite um por um:
   ```bash
   git init
   git add .
   git commit -m "feat: setup projeto com IA"
   git branch -M main
   git remote add origin URL_DO_SEU_REPOSITORIO
   git push -u origin main
   ```
   *Nota: Se abrir uma tela de "Autorizar Visual Studio Code", clique no botão verde para permitir o envio dos arquivos.*

### 3. Configurar na Netlify
1. Conecte seu repositório do GitHub na Netlify.
2. A Netlify detectará o Next.js automaticamente.
3. **Variáveis de Ambiente (MUITO IMPORTANTE):** No painel da Netlify, vá em *Site Settings > Environment Variables* e adicione:
   - `GEMINI_API_KEY`: Sua chave da API do Google Gemini. Sem isso, o simulador dará erro.

## Tecnologias utilizadas
- Next.js 15 (App Router)
- Tailwind CSS & Shadcn UI
- Firebase
- Genkit (IA para estratégias de economia)
