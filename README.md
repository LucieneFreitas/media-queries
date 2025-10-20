# 📱 Media Queries - Guia Completo para Iniciantes

## 📋 Índice

- [O que são Media Queries?](#o-que-são-media-queries)
- [Por que usar?](#por-que-usar)
- [Sintaxe Básica](#sintaxe-básica)
- [Breakpoints Comuns](#breakpoints-comuns)
- [Exemplos Práticos](#exemplos-práticos)
- [Demo Interativa](#demo-interativa)
- [Boas Práticas](#boas-práticas)
- [Recursos Adicionais](#recursos-adicionais)

---

## 🎯 O que são Media Queries?

**Media Queries** são regras CSS que permitem aplicar estilos diferentes dependendo das características do dispositivo que está acessando seu site - principalmente o **tamanho da tela**.

É como ter um "sensor inteligente" que detecta se a pessoa está usando um celular, tablet ou computador, e ajusta automaticamente o layout.

## 🚀 Por que usar?

✅ **Responsividade**: Seu site fica perfeito em qualquer dispositivo  
✅ **Experiência do Usuário**: Melhor usabilidade em todas as telas  
✅ **SEO**: Google prioriza sites mobile-friendly  
✅ **Profissionalismo**: Sites responsivos são o padrão da indústria  

---

## 💻 Sintaxe Básica

```css
/* Sintaxe geral */
@media (condição) {
  /* estilos aplicados quando a condição é verdadeira */
}

/* Exemplo prático */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}
```

### Operadores Principais

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `min-width` | A partir de X pixels | `@media (min-width: 768px)` |
| `max-width` | Até X pixels | `@media (max-width: 767px)` |
| `and` | Combina condições | `@media (min-width: 768px) and (max-width: 1024px)` |
| `orientation` | Orientação da tela | `@media (orientation: landscape)` |

---

## 📐 Breakpoints Comuns

```css
/* 📱 Smartphones (portrait) */
@media (max-width: 767px) {
  /* Estilos para mobile */
}

/* 📱 Tablets (portrait) */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Estilos para tablet */
}

/* 💻 Desktop */
@media (min-width: 1024px) {
  /* Estilos para desktop */
}

/* 🖥️ Large Desktop */
@media (min-width: 1440px) {
  /* Estilos para telas grandes */
}
```

### Tabela de Referência Rápida

| Dispositivo | Resolução Típica | Breakpoint |
|-------------|------------------|------------|
| 📱 Smartphone | 320px - 767px | `max-width: 767px` |
| 📱 Tablet | 768px - 1023px | `min-width: 768px` |
| 💻 Desktop | 1024px - 1439px | `min-width: 1024px` |
| 🖥️ Large Desktop | 1440px+ | `min-width: 1440px` |

---

## 🎨 Exemplos Práticos

### Exemplo 1: Layout em Grid Responsivo

```css
/* Mobile First: começa com 1 coluna */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Tablet: 2 colunas */
@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop: 3 colunas */
@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Exemplo 2: Navegação Responsiva

```css
/* Mobile: Menu hambúrguer vertical */
.nav {
  flex-direction: column;
  width: 100%;
}

.nav-item {
  width: 100%;
  text-align: center;
  padding: 15px;
}

/* Desktop: Menu horizontal */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .nav-item {
    width: auto;
    padding: 10px 20px;
  }
}
```

### Exemplo 3: Tipografia Responsiva

```css
/* Mobile */
h1 {
  font-size: 24px;
  line-height: 1.3;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 32px;
  }
  
  p {
    font-size: 18px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
    line-height: 1.2;
  }
  
  p {
    font-size: 20px;
    line-height: 1.8;
  }
}
```

### Exemplo 4: Imagens Responsivas

```css
/* Mobile: imagens ocupam 100% */
.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Desktop: limita o tamanho */
@media (min-width: 1024px) {
  .hero-image {
    max-width: 800px;
    margin: 0 auto;
  }
}
```

---

## 🎬 Demo Interativa

### Visualização por Dispositivo

#### 📱 **Smartphone (375px)**
```
┌─────────────────┐
│     HEADER      │
├─────────────────┤
│   NAV ITEM 1    │
│   NAV ITEM 2    │
│   NAV ITEM 3    │
├─────────────────┤
│   CARD 1        │
├─────────────────┤
│   CARD 2        │
├─────────────────┤
│   SIDEBAR       │
└─────────────────┘
```

#### 📱 **Tablet (768px)**
```
┌─────────────────────────────┐
│          HEADER             │
│  [Nav1] [Nav2] [Nav3]       │
├──────────────┬──────────────┤
│   CARD 1     │   CARD 2     │
├──────────────┴──────────────┤
│         SIDEBAR             │
└─────────────────────────────┘
```

#### 💻 **Desktop (1200px)**
```
┌───────────────────────────────────────┐
│              HEADER                   │
│     [Nav1] [Nav2] [Nav3] [Nav4]       │
├────────────────────────┬──────────────┤
│      CARD 1            │              │
├────────────────────────┤   SIDEBAR    │
│      CARD 2            │              │
└────────────────────────┴──────────────┘
```

### Código Completo do Layout Demo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Responsivo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }

        .header {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .nav {
            display: flex;
            flex-direction: column;
            background: #555;
            padding: 10px;
        }

        .nav-item {
            color: white;
            padding: 10px;
            text-align: center;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }

        .card {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 8px;
        }

        .sidebar {
            background: #e0e0e0;
            padding: 20px;
            margin: 0 20px 20px;
            border-radius: 8px;
        }

        /* TABLET */
        @media (min-width: 768px) {
            .nav {
                flex-direction: row;
                justify-content: center;
                gap: 20px;
            }

            .content-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
            .content-grid {
                grid-template-columns: 2fr 1fr;
            }

            .sidebar {
                margin: 0;
                grid-column: 2;
                grid-row: 1 / 3;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Meu Site Responsivo</h1>
    </div>
    
    <nav class="nav">
        <div class="nav-item">Home</div>
        <div class="nav-item">Sobre</div>
        <div class="nav-item">Serviços</div>
        <div class="nav-item">Contato</div>
    </nav>

    <div class="content-grid">
        <div class="card">
            <h2>Conteúdo Principal</h2>
            <p>Este layout se adapta automaticamente!</p>
        </div>
        
        <div class="card">
            <h2>Artigo em Destaque</h2>
            <p>Veja como o grid muda em cada dispositivo.</p>
        </div>
        
        <div class="sidebar">
            <h3>Sidebar</h3>
            <p>No mobile fico embaixo, no desktop ao lado!</p>
        </div>
    </div>
</body>
</html>
```

---

## ✨ Boas Práticas

### 1️⃣ **Mobile First**

Comece desenvolvendo para mobile e depois expanda para telas maiores:

```css
/* ✅ RECOMENDADO - Mobile First */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
```

```css
/* ❌ EVITAR - Desktop First */
.container {
  width: 1000px;
}

@media (max-width: 1023px) {
  .container {
    width: 750px;
  }
}

@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}
```

### 2️⃣ **Use viewport meta tag**

Sempre inclua no `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 3️⃣ **Teste em dispositivos reais**

- Use o DevTools do navegador (F12 > Toggle Device Toolbar)
- Teste em smartphones e tablets físicos
- Use serviços como BrowserStack

### 4️⃣ **Evite muitos breakpoints**

Mantenha simples: 2-4 breakpoints geralmente são suficientes.

### 5️⃣ **Use unidades relativas**

```css
/* ✅ BOM */
font-size: 1.2rem;
padding: 5%;
width: 90vw;

/* ❌ EVITAR */
font-size: 16px;
padding: 50px;
width: 1200px;
```

---

## 🔧 Ferramentas Úteis

- **Chrome DevTools**: Simula diferentes dispositivos
- **Responsive Design Checker**: [responsivedesignchecker.com](https://responsivedesignchecker.com)
- **Am I Responsive?**: [amiresponsive.co.uk](http://ami.responsivedesign.is)
- **Bootstrap**: Framework com grid responsivo pronto

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [MDN Web Docs - Media Queries](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries)
- [W3C CSS Media Queries](https://www.w3.org/TR/css3-mediaqueries/)

### Tutoriais
- [CSS-Tricks - A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [freeCodeCamp - Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design/)

### Vídeos
- [Curso de CSS Responsivo - YouTube](https://www.youtube.com)
- [Media Queries Tutorial - Traversy Media](https://www.youtube.com)

---



## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---



Feito com ❤️ para ajudar iniciantes em programação



