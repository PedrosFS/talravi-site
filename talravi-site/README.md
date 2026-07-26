# Site Talravi Consultoria

## Estrutura
```
index.html      → página única (Início, Serviços, Sobre, Contato)
css/style.css   → todo o visual
js/main.js      → menu mobile + envio do formulário
img/            → coloque logo/fotos aqui
```

## O que falta preencher (marcado como [TODO] no código)
- Texto real da seção "Sobre" (index.html)
- Telefone/WhatsApp, e-mail e endereço na seção "Contato"
- Número de WhatsApp no botão flutuante (`js` não precisa mexer, é no `index.html`, procure por `wa.me/55SEUNUMERO`)
- Logo de verdade (hoje é só a letra "T" estilizada — pode trocar por `<img>` com o arquivo em `img/`)

## Publicar no GitHub Pages (preview grátis)
1. Crie um repositório novo no GitHub (ex: `talravi-site`)
2. Suba estes arquivos (pelo site do GitHub, arrastando, ou via `git push`)
3. Vá em **Settings → Pages**
4. Em "Source", selecione a branch `main` e a pasta `/root`
5. Salve — em ~1 minuto o site fica em `https://SEUUSUARIO.github.io/talravi-site/`

## Trocar para o domínio da cliente (depois)
Quando ela comprar o domínio (ex: `talraviconsultoria.com.br`):
1. No mesmo painel **Settings → Pages**, campo "Custom domain", coloque o domínio
2. No painel do domínio (Registro.br, GoDaddy etc.), crie um registro **CNAME** apontando `www` para `SEUUSUARIO.github.io`
   (ou registros tipo **A** apontando para os IPs do GitHub Pages — o próprio painel do GitHub mostra quais)
3. Aguarde a propagação (pode levar algumas horas)

## Ativar o formulário de contato (Formspree — grátis até 50 envios/mês)
1. Crie conta em https://formspree.io
2. Crie um novo formulário, copie o endpoint (algo como `https://formspree.io/f/xxxxxxx`)
3. Abra `js/main.js` e troque a linha:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/SEU_ID_AQUI";
   ```
   pelo seu endpoint real
4. Pronto — o formulário passa a enviar e-mails de verdade

Até lá, o botão flutuante de WhatsApp já funciona assim que você trocar `wa.me/55SEUNUMERO` pelo número certo.
