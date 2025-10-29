# 📘 Guía Completa: Publicar en GitHub Pages

Esta guía te enseñará paso a paso cómo publicar tu aplicación React + Vite en GitHub Pages.

---

## 📋 Tabla de Contenido

1. [Requisitos Previos](#requisitos-previos)
2. [Configuración Inicial del Proyecto](#configuración-inicial-del-proyecto)
3. [Crear Token de Acceso Personal](#crear-token-de-acceso-personal)
4. [Primer Despliegue](#primer-despliegue)
5. [Configurar GitHub Pages](#configurar-github-pages)
6. [Actualizaciones Futuras](#actualizaciones-futuras)
7. [Solución de Problemas](#solución-de-problemas)

---

## 🎯 Requisitos Previos

Antes de comenzar, asegúrate de tener:

- ✅ Node.js y npm instalados
- ✅ Git configurado en tu máquina
- ✅ Un repositorio en GitHub
- ✅ Tu proyecto React + Vite funcionando localmente

---

## ⚙️ Configuración Inicial del Proyecto

### Paso 1: Instalar gh-pages

En la terminal, dentro de tu proyecto, ejecuta:

```bash
npm install --save-dev gh-pages
```

### Paso 2: Configurar package.json

Abre `package.json` y agrega/modifica lo siguiente:

```json
{
  "name": "tu-proyecto",
  "version": "1.0.0",
  "homepage": "https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**⚠️ IMPORTANTE:** Reemplaza:

- `TU_USUARIO` con tu nombre de usuario de GitHub
- `NOMBRE_REPOSITORIO` con el nombre de tu repositorio

**Ejemplo:**

```json
"homepage": "https://ashmichi1.github.io/vista_programas_contacto_corporativo"
```

### Paso 3: Crear vite.config.js

Crea o modifica el archivo `vite.config.js` en la raíz del proyecto:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/NOMBRE_REPOSITORIO/',
  build: {
    outDir: 'dist',
  },
});
```

**⚠️ IMPORTANTE:** Reemplaza `NOMBRE_REPOSITORIO` con el nombre de tu repositorio.

**Ejemplo:**

```javascript
base: '/vista_programas_contacto_corporativo/',
```

### Paso 4: Crear .gitignore

Crea o verifica que exista `.gitignore` en la raíz con este contenido:

```gitignore
# Dependencies
node_modules
dist
dist-ssr
*.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# OS files
Thumbs.db

# Testing
coverage
.nyc_output
```

### Paso 5: Configurar Git Credential Helper

Esto permitirá que Git guarde tus credenciales:

```bash
git config --global credential.helper store
```

---

## 🔑 Crear Token de Acceso Personal

GitHub requiere un token de acceso personal para publicar. Sigue estos pasos:

### Paso 1: Ir a GitHub Tokens

1. Ve a: https://github.com/settings/tokens
2. O navega: **GitHub** → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**

### Paso 2: Generar Nuevo Token

1. Click en **"Generate new token"** → **"Generate new token (classic)"**
2. Dale un nombre descriptivo (ej: "Deploy GitHub Pages")
3. Selecciona expiración (recomendado: 90 días)
4. En **"Select scopes"**, marca:
   - ✅ **`repo`** (acceso completo al repositorio)
5. Scroll hacia abajo y click en **"Generate token"**

### Paso 3: Copiar Token

⚠️ **MUY IMPORTANTE:**

- Copia el token inmediatamente
- Se muestra solo UNA vez
- Guárdalo en un lugar seguro
- Nunca lo compartas públicamente
- El token se ve así: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 🚀 Primer Despliegue

### Paso 1: Guardar Cambios en Git

```bash
git add .
git commit -m "Configurar proyecto para GitHub Pages"
git push
```

### Paso 2: Construir el Proyecto

Verifica que el proyecto compile correctamente:

```bash
npm run build
```

Deberías ver en la consola:

```
✓ built in [tiempo]
dist/index.html
dist/assets/...
```

### Paso 3: Desplegar a GitHub Pages

Ejecuta el siguiente comando (reemplaza `TU_TOKEN` con tu token copiado):

```bash
npx gh-pages -d dist -r https://TU_TOKEN@github.com/TU_USUARIO/TU_REPOSITORIO.git
```

**Ejemplo completo:**

```bash
npx gh-pages -d dist -r https://ghp_abc123xyz@github.com/ashmichi1/vista_programas_contacto_corporativo.git
```

Deberías ver:

```
Published
```

✅ **¡Listo!** Los archivos se han subido a la rama `gh-pages`.

---

## 🌐 Configurar GitHub Pages

Ahora debes habilitar GitHub Pages en tu repositorio:

### Paso 1: Ir a Settings

1. Ve a tu repositorio en GitHub
2. Click en **"Settings"** (⚙️ arriba a la derecha)

### Paso 2: Configurar Pages

1. En el menú lateral izquierdo, busca y click en **"Pages"**
2. En la sección **"Build and deployment"**:
   - **Source:** Selecciona **"Deploy from a branch"**
   - **Branch:** Selecciona **`gh-pages`**
   - **Folder:** Selecciona **`/ (root)`**
3. Click en **"Save"**

### Paso 3: Esperar el Despliegue

1. Verás un mensaje: _"Your site is ready to be published at..."_
2. Espera 2-3 minutos
3. La página se refrescará automáticamente
4. Verás: ✅ _"Your site is live at https://..."_

### Paso 4: Verificar

Abre tu navegador y ve a:

```
https://TU_USUARIO.github.io/TU_REPOSITORIO/
```

🎉 **¡Tu sitio está publicado!**

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios y quieras actualizar tu sitio:

### Opción 1: Usando npm run deploy

```bash
# 1. Guarda tus cambios
git add .
git commit -m "Descripción de cambios"
git push

# 2. Despliega (te pedirá credenciales)
npm run deploy
```

Cuando pida credenciales:

- **Username:** tu_usuario_github
- **Password:** pega_tu_token (no tu contraseña de GitHub)

### Opción 2: Con token directo

```bash
# 1. Guarda tus cambios
git add .
git commit -m "Descripción de cambios"
git push

# 2. Despliega con token
npx gh-pages -d dist -r https://TU_TOKEN@github.com/TU_USUARIO/TU_REPOSITORIO.git
```

⏱️ Los cambios tardan 1-2 minutos en aparecer en el sitio.

---

## 🔧 Solución de Problemas

### Problema: Error 404 después de desplegar

**Soluciones:**

1. **Verificar configuración de GitHub Pages:**

   - Ve a Settings → Pages
   - Asegúrate de que esté configurado en `gh-pages` branch y `/ (root)` folder

2. **Verificar vite.config.js:**

   - La propiedad `base` debe coincidir con el nombre del repositorio
   - Debe terminar en `/`

   ```javascript
   base: '/nombre-repositorio/',
   ```

3. **Verificar package.json:**

   - La propiedad `homepage` debe ser correcta

   ```json
   "homepage": "https://usuario.github.io/repositorio"
   ```

4. **Limpiar y redesplegar:**
   ```bash
   rm -rf node_modules/.cache/gh-pages
   npm run build
   npx gh-pages -d dist -f -r https://TOKEN@github.com/usuario/repo.git
   ```

### Problema: Error de permisos (403)

**Causa:** Credenciales incorrectas o token expirado.

**Solución:**

1. Crea un nuevo token en https://github.com/settings/tokens
2. Asegúrate de marcar el scope `repo`
3. Usa el nuevo token en el comando de deploy

### Problema: La rama gh-pages tiene node_modules

**Solución:** Limpiar y redesplegar:

```bash
# 1. Eliminar la rama gh-pages
git push origin --delete gh-pages

# 2. Limpiar cache
rm -rf node_modules/.cache/gh-pages

# 3. Redesplegar
npx gh-pages -d dist -r https://TOKEN@github.com/usuario/repo.git
```

### Problema: Los estilos no cargan

**Causa:** Rutas incorrectas en el `base` de vite.config.js

**Solución:**

1. Verifica que `base` en `vite.config.js` sea correcto
2. Debe incluir el nombre del repositorio: `base: '/nombre-repo/',`
3. Reconstruye: `npm run build`
4. Redespliega: `npm run deploy`

---

## 📝 Notas Importantes

### Seguridad del Token

- ⚠️ **NUNCA** subas tu token a Git
- ⚠️ **NUNCA** compartas tu token públicamente
- ⚠️ Si expones un token accidentalmente, revócalo inmediatamente
- 🔄 Renueva tokens periódicamente

### Sobre las Ramas

- **Rama principal** (`main` o `gh-pages-/-(root)`): Contiene tu código fuente
- **Rama `gh-pages`**: Contiene solo los archivos compilados (carpeta `dist`)
- ⚠️ No edites manualmente la rama `gh-pages`

### Cache del Navegador

Si no ves cambios después de actualizar:

1. Refresca con **Ctrl + Shift + R** (o **Cmd + Shift + R** en Mac)
2. Abre en modo incógnito
3. Borra el cache del navegador

---

## 🎓 Resumen del Flujo de Trabajo

```
┌─────────────────────────────────────────┐
│ 1. Hacer cambios en tu código          │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│ 2. git add . && git commit && git push  │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│ 3. npm run deploy (o con token)        │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│ 4. Esperar 1-2 minutos                  │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│ 5. ¡Sitio actualizado! 🎉               │
└─────────────────────────────────────────┘
```

---

## 🔗 Enlaces Útiles

- 📚 [Documentación oficial de GitHub Pages](https://docs.github.com/es/pages)
- 📚 [Documentación de Vite](https://vitejs.dev/guide/)
- 📚 [Documentación de gh-pages](https://github.com/tschaub/gh-pages)
- 🔑 [Crear tokens de GitHub](https://github.com/settings/tokens)

---

## ✅ Checklist de Verificación

Antes de desplegar, verifica:

- [ ] ✅ `package.json` tiene `homepage` correcto
- [ ] ✅ `package.json` tiene scripts `predeploy` y `deploy`
- [ ] ✅ `vite.config.js` tiene `base` correcto
- [ ] ✅ `.gitignore` excluye `node_modules` y `dist`
- [ ] ✅ Tienes un token de GitHub válido
- [ ] ✅ `npm run build` funciona sin errores
- [ ] ✅ GitHub Pages está configurado en Settings

---

**¡Felicidades! 🎉 Ahora sabes cómo publicar tu aplicación en GitHub Pages.**

Si tienes problemas, revisa la sección de **Solución de Problemas** o crea un issue en el repositorio.
