# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Güncel kurumsal ve büyük projelerde kullanılan klasör yapısı


src/
├── app/                  # Uygulamanın genel ayarları
│   ├── store.js          # Global Redux Store
│   ├── routes.jsx        # Tüm routing tanımları
│   └── App.jsx           # Root component
├── assets/               # Resimler, fontlar, global CSS
├── components/           # SADECE Global UI bileşenleri (Button, Input, Modal)
│   ├── Button/
│   └── Input/
├── config/               # Çevresel değişkenler (env), sabitler
├── features/             # İŞİN KALBİ BURASI (Domain Logic)
│   ├── auth/             # Kimlik doğrulama modülü
│   │   ├── api/          # Auth ile ilgili endpointler (login, register)
│   │   ├── components/   # LoginForm, RegisterForm (Sadece buraya özel)
│   │   ├── hooks/        # useAuth, useLogin
│   │   ├── slices/       # AuthReduxSlice (User state)
│   │   └── types/        # TypeScript tipleri
│   ├── cart/             # Sepet modülü
│   └── product/          # Ürün modülü
├── hooks/                # Global hooklar (useTheme, useWindowSize)
├── layouts/              # Sayfa düzenleri (AuthLayout, DashboardLayout)
├── lib/                  # 3. parti kütüphane ayarları (Axios instance, Firebase)
├── pages/                # Sayfalar (Feature componentlerini birleştirir)
├── services/             # Genel servisler (LocalStorage servisi, Logger)
├── types/                # Global TypeScript tipleri
└── utils/                # Yardımcı saf fonksiyonlar (formatDate, currencyFormat)