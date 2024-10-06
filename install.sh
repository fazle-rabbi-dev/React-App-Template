# Install all dependencies
npm install react react-dom react-router-dom react-error-boundary @tanstack/react-query react-hot-toast react-spinners react-hook-form zod @hookform/resolvers zustand firebase clsx lucide-react sweetalert2 tailwind-merge

sleep 1
clear

npm install -D vite @vitejs/plugin-react eruda tailwindcss postcss autoprefixer
clear
echo -e "\033[1;93m [*] Starting dev server .."
npm run dev
