# Casei Barato — Simulador de Casamento Inteligente

Este é um projeto Next.js 15 configurado com Genkit para Inteligência Artificial. Para que o simulador funcione, o deploy deve ser dinâmico.

## 🚀 Passo a Passo para o Deploy na Netlify

### 1. Subir para o GitHub (Terminal da IDE)
Se você já autorizou o VS Code e rodou os comandos `git push`, seu código já está no ar. Caso contrário, use o **Terminal** abaixo:
1. `git add .`
2. `git commit -m "feat: site oficial"`
3. `git push -u origin main`

### 2. Configurar na Netlify
1. No painel da Netlify, clique em **Add new site** > **Import an existing project**.
2. Conecte seu GitHub e selecione este repositório.
3. A Netlify detectará o Next.js automaticamente. Mantenha o diretório de publicação como `.next`.

### 3. Configurar a IA (MUITO IMPORTANTE)
Para o simulador de economia funcionar, você precisa adicionar sua chave de API do Google:
1. Na Netlify, vá em **Site Settings** > **Environment Variables**.
2. Clique em **Add a variable**.
3. **Key:** `GEMINI_API_KEY`
4. **Value:** (Sua chave gerada em aistudio.google.com)
5. Clique em **Save** e faça um novo deploy se necessário.

## Tecnologias utilizadas
- Next.js 15 (App Router)
- Tailwind CSS & Shadcn UI
- Genkit (IA para estratégias de economia)
- UTMfy Pixel (Rastreamento)
