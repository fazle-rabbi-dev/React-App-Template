# Install all dependencies
npm install react react-dom react-router-dom @tanstack/react-query appwrite react-hot-toast react-spinners react-hook-form yup @hookform/resolvers axios zustand lucide-react zod sweetalert2 tailwind-merge clsx firebase

sleep 1
clear

npm install -D vite @vitejs/plugin-react eruda tailwindcss postcss autoprefixer
clear
echo -e "\033[1;93m [*] Starting dev server .."
npm run dev
