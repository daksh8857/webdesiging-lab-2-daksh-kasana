# Cloud deployment notes
- Deploy `backend/` as a Node.js service and configure `MONGO_URI` and `PORT`.
- Add the deployed backend origin to the frontend build variable `VITE_API_URL`.
- Deploy `frontend/` as a static Vite site using `npm run build`; publish the `dist/` directory.
- Configure MongoDB network access for the backend host.
- Never commit `.env` or database credentials.
