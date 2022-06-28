import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.keyboard(
    [
      Markup.button.callback('📎 Create todo', 'create'),
      Markup.button.callback('📋 List of todo', 'list'),
      Markup.button.callback('✅ To Complete', 'done'),
      Markup.button.callback('✏️ Edit todo', 'edit'),
      Markup.button.callback('❌ Delete todo', 'delete'),
    ],
    {
      columns: 2,
    },
  );
}
