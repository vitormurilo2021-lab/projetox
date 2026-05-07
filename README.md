# Casei Barato — Simulador de Casamento Inteligente

Este é um projeto Next.js 15 configurado com Genkit para Inteligência Artificial. Para que o simulador funcione, o deploy deve ser dinâmico (não use a pasta `out`).

## 🚀 Como atualizar seu site (Sempre que fizermos mudanças)

Sempre que eu fizer uma alteração no código e você quiser que ela apareça no seu site da Netlify, rode estes comandos no **Terminal** (aba inferior):

1. `git add .` (Prepara os arquivos)
2. `git commit -m "descrição da mudança"` (Grava a alteração)
3. `git push` (Envia para o GitHub e atualiza a Netlify)

---

## 🛠️ Passo a Passo para o Primeiro Deploy na Netlify

### 1. No Terminal (Configuração Inicial)
Se for a primeira vez, conecte seu GitHub:
1. `git add .`
2. `git commit -m "feat: site oficial"`
3. `git push -u origin main` (Siga as instruções de autorização que aparecerem)

### 2. Configurar na Netlify
1. No painel da Netlify, clique em **Add new site** > **Import an existing project**.
2. Conecte seu GitHub e selecione este repositório.
3. Verifique se o comando de build é `npm run build` e o diretório é `.next`.

### 3. Configurar a IA (MUITO IMPORTANTE)
Para o simulador de economia funcionar, você **precisa** adicionar sua chave de API:
1. Na Netlify, vá em **Site Configuration** > **Environment Variables**.
2. Clique em **Add a variable** > **Create a single variable**.
3. **Key:** `GEMINI_API_KEY`
4. **Value:** (Sua chave gerada em [aistudio.google.com](https://aistudio.google.com/app/apikey))
5. Clique em **Save**.

## Tecnologias utilizadas
- Next.js 15 (App Router)
- Tailwind CSS & Shadcn UI
- Genkit (IA para estratégias de economia)
- UTMfy Pixel (Rastreamento)
